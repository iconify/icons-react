import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":321};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.szzvwjxbw {
  fill: var(--svg-color--211e1e, #211e1e);
  d: path("M192.001 64.072H63.999v192.214h128.002zM256 320.357H0V0h256z");
}

.tc6a7cgjq {
  fill: var(--svg-color--cfcecd, #cfcecd);
  d: path("M191.985 256.287H63.983V128.144h128.002z");
}
</style><path class="tc6a7cgjq"/><path class="szzvwjxbw"/>`,
		"fallback": "logos:opencode-icon",
	});
}

export default Component;
