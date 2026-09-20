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
		"content": `<style>.xu3__7-nl {
  fill: currentColor;
  d: path("M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-1 2.5h-5.5a.75.75 0 0 0-.102 1.493L9.25 6h5.5a.75.75 0 0 0 .102-1.493zm-2 6.035l1.275 1.25a.75.75 0 1 0 1.05-1.07l-2.55-2.5a.75.75 0 0 0-1.06.01l-2.45 2.5a.75.75 0 1 0 1.071 1.05l1.164-1.187v3.662a.75.75 0 0 0 1.5 0z");
}
</style><path class="xu3__7-nl"/>`,
		"fallback": "fluent:phone-header-arrow-up-24-filled",
	});
}

export default Component;
