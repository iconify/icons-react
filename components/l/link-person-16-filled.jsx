import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w9bcqqbcz {
  fill: currentColor;
  d: path("M9.75 3h.516a3.742 3.742 0 0 1 3.696 4.286a3 3 0 0 0-1.544-1.143a2.24 2.24 0 0 0-1.999-1.638l-.153-.005H9.75a.75.75 0 0 1-.102-1.493zm-.849 4.5a3 3 0 0 1 1.756-1.38a.75.75 0 0 0-.407-.12h-4.5l-.102.007A.75.75 0 0 0 5.75 7.5zM5.752 3h.498a.75.75 0 0 1 .102 1.493L6.25 4.5h-.498A2.252 2.252 0 0 0 5.598 9l.154.005h.498a.75.75 0 0 1 .102 1.493l-.102.007h-.498a3.752 3.752 0 0 1-.199-7.5zM13.5 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S8 14.75 8 13.5A1.5 1.5 0 0 1 9.5 12h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="w9bcqqbcz"/>`,
		"fallback": "fluent:link-person-16-filled",
	});
}

export default Component;
