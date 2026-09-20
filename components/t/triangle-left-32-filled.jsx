import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.guzclhb9z {
  fill: currentColor;
  d: path("M4.682 13.15c-2.242 1.236-2.243 4.457-.001 5.693l19.498 10.75c2.166 1.194 4.82-.373 4.82-2.846V5.255c0-2.473-2.653-4.04-4.819-2.847z");
}
</style><path class="guzclhb9z"/>`,
		"fallback": "fluent:triangle-left-32-filled",
	});
}

export default Component;
