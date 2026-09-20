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
		"content": `<style>.rmoswmjoa {
  fill: currentColor;
  d: path("M19.745 4a2.25 2.25 0 0 1 2.25 2.25v11.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 15.75a1.75 1.75 0 0 1 1.606-1.744L8.75 14h6.495a1.75 1.75 0 0 1 1.744 1.607l.006.143l-.001 2.754h2.751a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75M12 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6");
}
</style><path class="rmoswmjoa"/>`,
		"fallback": "fluent:video-person-24-filled",
	});
}

export default Component;
