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
		"content": `<style>.wh0rmpb7p {
  fill: var(--svg-color--0078d4, #0078d4);
  d: path("M0 0h121.329v121.329H0zm134.671 0H256v121.329H134.671zM0 134.671h121.329V256H0zm134.671 0H256V256H134.671z");
}
</style><path class="wh0rmpb7p"/>`,
		"fallback": "logos:microsoft-windows-icon",
	});
}

export default Component;
