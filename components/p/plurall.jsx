import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lntyh5syk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.342 22.361c0 13.087-16.53 14.018-18.092 1.863c-.316-6.552-8.098-7.483-9.113-.632c-.56 9.866 6.983 18.318 16.849 18.879s18.318-6.983 18.878-16.849q.018-.307.025-.617c.183-7.333-7.616-6.701-8.547-2.644M36.451 5.5c2.511 0 4.54 2.095 4.54 4.69s-2.029 4.705-4.54 4.705s-4.54-2.112-4.54-4.706s2.03-4.689 4.54-4.689m-24.943.316c2.511 0 4.54 2.095 4.54 4.69s-2.029 4.689-4.54 4.689s-4.54-2.096-4.54-4.69s2.03-4.69 4.54-4.69");
}
</style><path class="lntyh5syk"/>`,
		"fallback": "arcticons:plurall",
	});
}

export default Component;
