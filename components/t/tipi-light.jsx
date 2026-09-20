import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tdbtjtssa {
  fill: currentColor;
  d: path("M237.05 212.77L135.12 53.5l21.93-34.26A6 6 0 1 0 147 12.77l-19 29.6l-19-29.6a6 6 0 1 0-10 6.47l21.88 34.26L19 212.77a6 6 0 0 0 5 9.23h208a6 6 0 0 0 5.05-9.23M82.64 210L128 139.13L173.36 210Zm105 0l-54.55-85.23a6 6 0 0 0-10.1 0L68.4 210H35l93-145.37L221 210Z");
}
</style><path class="tdbtjtssa"/>`,
		"fallback": "ph:tipi-light",
	});
}

export default Component;
