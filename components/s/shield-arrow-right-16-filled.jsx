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
		"content": `<style>.ksnbz1bge {
  fill: currentColor;
  d: path("M7.647 2.146a.5.5 0 0 1 .708 0C9.595 3.39 10.969 4 12.5 4a.5.5 0 0 1 .5.5v1.1a5.5 5.5 0 0 0-7.496 7.204C3.844 11.589 3 9.81 3 7.5v-3a.5.5 0 0 1 .5-.5c1.53 0 2.904-.611 4.147-1.854M15 10.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0m-4.146 2.354a.5.5 0 0 1-.708-.708L11.293 11H8.5a.5.5 0 0 1 0-1h2.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 .146.351v.006a.5.5 0 0 1-.144.348l-.003.003z");
}
</style><path class="ksnbz1bge"/>`,
		"fallback": "fluent:shield-arrow-right-16-filled",
	});
}

export default Component;
