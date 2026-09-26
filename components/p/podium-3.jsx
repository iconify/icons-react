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
		"content": `<style>.ke7175b3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 22H22M4 22V18.5H9V15H14V11.5H20V22H4ZM15.3 2H18.7L16.728 4.33402C18.7 4.33402 18.7 4.97056 18.7 5.92539C18.7 7.41067 15.606 7.19849 15.3 6.24366");
}
</style><path class="ke7175b3w"/>`,
		"fallback": "keyline-icons:podium-3",
	});
}

export default Component;
