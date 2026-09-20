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
		"content": `<style>.o7r6dacaj {
  fill: currentColor;
  d: path("m12 11l7.692-5H4.308zm-9 8V5h18v7.673h-1v-5.77l-8 5.213l-8-5.212V18h9.096v1zm14.683 2.777l-.866-.5L18.14 19H15.5v-1h2.64l-1.323-2.277l.866-.5L19 17.5l1.317-2.277l.866.5L19.86 18h2.64v1h-2.64l1.323 2.277l-.866.5L19 19.5z");
}
</style><path class="o7r6dacaj"/>`,
		"fallback": "material-symbols-light:mail-asterisk-outline-sharp",
	});
}

export default Component;
