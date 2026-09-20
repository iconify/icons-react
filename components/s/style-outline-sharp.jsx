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
		"content": `<style>.bnm183kvv {
  fill: currentColor;
  d: path("m4.321 20.3l-2.027-.946l2.027-4.389zm2.77-4.377l2.144 5.962H7.09zm4.923 5.408L6.837 7.127l9.446-3.439l5.196 14.185zM11.88 9.713q.287-.288.287-.713t-.287-.712T11.167 8t-.712.288t-.288.712t.288.713t.712.287t.713-.288M12.617 20l7.55-2.75L15.717 5l-7.55 2.75zM8.167 7.75L15.717 5z");
}
</style><path class="bnm183kvv"/>`,
		"fallback": "material-symbols-light:style-outline-sharp",
	});
}

export default Component;
