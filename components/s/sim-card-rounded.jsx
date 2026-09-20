import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b0csvwy7j {
  fill: currentColor;
  d: path("M8.357 18.472q.143-.144.143-.357v-.423q0-.212-.144-.356t-.357-.144t-.356.144t-.143.356v.424q0 .212.144.356t.357.143t.356-.143m0-3.808q.143-.144.143-.356v-2.423q0-.213-.144-.357t-.357-.144t-.356.144t-.143.356v2.424q0 .212.144.356t.357.144t.356-.144m4 3.808q.143-.144.143-.357v-2.423q0-.212-.144-.356t-.357-.144t-.356.144t-.143.356v2.424q0 .212.144.356t.357.143t.356-.143m0-5.808q.143-.144.143-.356v-.423q0-.213-.144-.357t-.357-.143t-.356.143t-.143.357v.423q0 .212.144.356t.357.144t.356-.144m4 5.808q.143-.144.143-.357v-.423q0-.212-.144-.356t-.357-.144t-.356.144t-.143.356v.424q0 .212.144.356t.357.143t.356-.143m0-3.808q.143-.144.143-.356v-2.423q0-.213-.144-.357t-.357-.144t-.356.144t-.143.356v2.424q0 .212.144.356t.357.144t.356-.144M6.616 21q-.691 0-1.153-.462T5 19.385V9.095q0-.332.13-.633t.349-.518L9.944 3.48q.217-.218.518-.348T11.094 3h6.29q.691 0 1.153.462T19 4.615v14.77q0 .69-.463 1.152T17.385 21z");
}
</style><path class="b0csvwy7j"/>`,
		"fallback": "material-symbols-light:sim-card-rounded",
	});
}

export default Component;
