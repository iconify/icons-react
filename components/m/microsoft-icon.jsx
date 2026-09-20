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
		"content": `<style>.c97awnbuk {
  fill: var(--svg-color--f1511b, #f1511b);
  d: path("M121.666 121.666H0V0h121.666z");
}

.jlqq20lvs {
  fill: var(--svg-color--80cc28, #80cc28);
  d: path("M256 121.666H134.335V0H256z");
}

.rx_11zbpa {
  fill: var(--svg-color--fbbc09, #fbbc09);
  d: path("M256 256.002H134.335V134.336H256z");
}

.yq2qxybxe {
  fill: var(--svg-color--00adef, #00adef);
  d: path("M121.663 256.002H0V134.336h121.663z");
}
</style><path class="c97awnbuk"/><path class="jlqq20lvs"/><path class="yq2qxybxe"/><path class="rx_11zbpa"/>`,
		"fallback": "logos:microsoft-icon",
	});
}

export default Component;
