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
		"content": `<style>.fnkqajb8n {
  fill: var(--svg-color--fff, #fff);
  d: path("m128.453 88.305l6.165-32.447h-38.09L68.201 204.8h43.255l11.68-61.41c6.887-36.213 27.663-50.704 57.23-46.23l8.446-44.426c-25.678-2.366-49.99 11.961-60.36 35.571z");
}

.tofpnqb0b {
  fill: var(--svg-color--ea0000, #ea0000);
  d: path("M0 0h256v256H0z");
}
</style><path class="tofpnqb0b"/><path class="fnkqajb8n"/>`,
		"fallback": "logos:rackspace-icon",
	});
}

export default Component;
