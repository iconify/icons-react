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
		"content": `<style>.unj6_ybkz {
  fill: currentColor;
  d: path("M2 4c-.36 0-.697.095-.989.261A2.5 2.5 0 0 1 3.5 2h4A2.5 2.5 0 0 1 10 4.5v5A2.5 2.5 0 0 1 7.5 12H6.168l.45-.618A2 2 0 0 0 7 10.206V9a2 2 0 0 0-1-1.732V6a2 2 0 0 0-2-2zm11.036 6.778L10.9 9.304a2 2 0 0 0 .02-.282V4.98q0-.143-.02-.282l2.136-1.474a1.25 1.25 0 0 1 1.96 1.028V9.75a1.25 1.25 0 0 1-1.96 1.028M1 6v2a1 1 0 0 0-1 1v1.179a1 1 0 0 0 .187.582L1.5 12.594V14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.406l1.309-1.8A1 1 0 0 0 6 10.206V9a1 1 0 0 0-1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m3 2H2V6h2z");
}
</style><path class="unj6_ybkz"/>`,
		"fallback": "fluent:video-usb-16-filled",
	});
}

export default Component;
