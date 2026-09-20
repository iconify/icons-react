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
		"content": `<style>.ndlf73bzy {
  fill: currentColor;
  d: path("M5.143 18.856Q5 18.713 5 18.5v-13q0-.213.144-.356T5.501 5t.356.144T6 5.5v13q0 .213-.144.356T5.499 19t-.356-.144m6.5 0q-.143-.143-.143-.356v-2.077q0-.212.144-.356t.357-.144t.356.144t.143.356V18.5q0 .213-.144.356t-.357.144t-.356-.144m6.5 0Q18 18.713 18 18.5v-13q0-.213.144-.356T18.501 5t.356.144T19 5.5v13q0 .213-.144.356t-.357.144t-.356-.144m-6.5-5.461q-.143-.144-.143-.357v-2.077q0-.212.144-.356t.357-.144t.356.144t.143.356v2.077q0 .213-.144.357t-.357.143t-.356-.143m0-5.462q-.143-.144-.143-.356V5.5q0-.213.144-.356T12.001 5t.356.144t.143.356v2.077q0 .213-.144.356t-.357.144t-.356-.144");
}
</style><path class="ndlf73bzy"/>`,
		"fallback": "material-symbols-light:road-rounded",
	});
}

export default Component;
