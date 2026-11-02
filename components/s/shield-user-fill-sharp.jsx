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
		"content": `<style>.lete31oga {
  fill: currentColor;
  d: path("M3 10V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7c-.001 5.745-3.532 9.663-8.594 11.914a1 1 0 0 1-.812 0C6.532 19.663 3.001 15.745 3 10m6.236-2.168a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M12 19.9c1.685-.795 3.27-1.848 4.515-3.246a5.168 5.168 0 0 0-9.03 0C8.73 18.052 10.315 19.105 12 19.9");
}
</style><path class="lete31oga"/>`,
		"fallback": "coolicons:shield-user-fill-sharp",
	});
}

export default Component;
