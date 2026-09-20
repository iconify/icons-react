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
		"content": `<style>.ir5hf_i7k {
  fill: currentColor;
  d: path("M11.625 21.513q-.175-.063-.325-.213l-2.6-2.6q-.275-.275-.275-.687T8.7 17.3q.3-.3.713-.3t.712.3l.875.875V13.9q-1.725-.35-2.863-1.713T7 9q0-2.075 1.463-3.537T12 4t3.538 1.463T17 9q0 1.825-1.137 3.188T13 13.9v4.275l.9-.9q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.15.15-.325.213t-.375.062t-.375-.062");
}
</style><path class="ir5hf_i7k"/>`,
		"fallback": "material-symbols:swipe-down-alt-rounded",
	});
}

export default Component;
