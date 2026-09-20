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
		"content": `<style>.omeybbcfr {
  fill: currentColor;
  d: path("M19.25 8.5a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-3.674-1.997a3.8 3.8 0 0 1-.002-1.5H2.752l-.102.007a.75.75 0 0 0 .102 1.493zM21.253 18h-18.5l-.102.007a.75.75 0 0 0 .102 1.493h18.5l.102-.007A.75.75 0 0 0 21.253 18m-18.5-6.497h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493z");
}
</style><path class="omeybbcfr"/>`,
		"fallback": "fluent:navigation-unread-24-regular",
	});
}

export default Component;
