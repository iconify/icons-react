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
		"content": `<style>.kti1c3bdz {
  fill: currentColor;
  d: path("M14.475 11.975Q15.5 10.95 15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13t2.475-1.025M12 22q-3.65-.925-5.825-4T4 11.1V5l8-3l8 3v6.1q0 3.825-2.175 6.9T12 22m0-2.1q1.475-.475 2.613-1.487t1.987-2.288q-1.075-.55-2.238-.837T12 15t-2.363.288t-2.237.837q.85 1.275 1.988 2.288T12 19.9");
}
</style><path class="kti1c3bdz"/>`,
		"fallback": "material-symbols:shield-person-sharp",
	});
}

export default Component;
