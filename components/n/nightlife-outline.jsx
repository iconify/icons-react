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
		"content": `<style>.kqk1_ubtd {
  fill: currentColor;
  d: path("M4.885 19.5v-1h2v-5.346L2.115 6h10.539l-4.77 7.154V18.5h2v1zm.4-10.5h4.2l1.361-2H3.923zm8.33 9.772q-.73-.729-.73-1.77t.729-1.771t1.77-.731q.399 0 .76.134q.362.133.74.45V6h4v1.77h-3V17q0 1.042-.728 1.77q-.728.73-1.769.73t-1.771-.728");
}
</style><path class="kqk1_ubtd"/>`,
		"fallback": "material-symbols-light:nightlife-outline",
	});
}

export default Component;
