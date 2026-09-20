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
		"content": `<style>.ei5gyccsu {
  fill: currentColor;
  d: path("M10.368 17.616q-.674 0-1.146-.475T8.75 16v-1.942q-1.29-.84-2.02-2.173T6 9.019q0-2.502 1.745-4.26T11.996 3t4.255 1.747T18 9q0 1.552-.73 2.882t-2.02 2.176V16q0 .666-.475 1.14q-.474.476-1.14.476zM10.173 21q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.654q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="ei5gyccsu"/>`,
		"fallback": "material-symbols-light:lightbulb-2-rounded",
	});
}

export default Component;
