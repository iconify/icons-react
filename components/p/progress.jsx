import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":277};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vsaxc-spu {
  fill: var(--svg-color--5ce500, #5ce500);
  d: path("M63.017 260.487L2.769 223.492l60.248-35.871zm30.83 16.292V172.754L0 115.906l65.32-38.532l91.541 55.952v104.53zm90.932-12.793V119.229L57.516 41.861L128.24 0L256 74.049V221.17z");
}
</style><path class="vsaxc-spu"/>`,
		"fallback": "logos:progress",
	});
}

export default Component;
