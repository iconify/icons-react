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
		"content": `<style>.okhmfd40a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 3L2 3L2 17L22 17L22 14M12 17L12 21M7 21L17 21M20.6667 7C20.6667 8.4728 19.4728 9.6667 18 9.6667C16.5272 9.6667 15.3333 8.4728 15.3333 7C15.3333 5.5272 16.5272 4.3333 18 4.3333C19.4728 4.3333 20.6667 5.5272 20.6667 7ZM20.99 7L23 7M20.1142 9.1142L21.5355 10.5355M18 9.99L18 12M15.8858 9.1142L14.4645 10.5355M15.01 7L13 7M15.8858 4.8858L14.4645 3.4645M18 4.01L18 2M20.1142 4.8858L21.5355 3.4645");
}
</style><path class="okhmfd40a"/>`,
		"fallback": "keyline-icons:monitor-2-cog-sharp",
	});
}

export default Component;
