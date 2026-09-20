import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h42iq639v {
  fill: currentColor;
  d: path("M12.981 2a1.25 1.25 0 0 0-1.206.92L5.86 24.5H3.083a.75.75 0 0 0 0 1.5h21.833a.75.75 0 1 0 0-1.5H22.14L16.224 2.92A1.25 1.25 0 0 0 15.018 2zM7.483 24.25l1.234-4.5h7.533a.75.75 0 0 0 0-1.5H9.128l.685-2.5h5.437a.75.75 0 0 0 0-1.5h-5.025L13.172 3.5h1.656l5.688 20.75z");
}
</style><path class="h42iq639v"/>`,
		"fallback": "fluent:road-cone-28-regular",
	});
}

export default Component;
