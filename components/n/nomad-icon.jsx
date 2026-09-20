import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":296};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dn-uczblj {
  fill: var(--svg-color--00ca8e, #00ca8e);
  d: path("M128.044 0L0 73.865v147.773l127.956 73.865L256 221.638V73.865zm57.123 162.582l-34.098 19.685l-41.217-22.542v47.105L71.14 231.393v-98.428l30.76-18.806l42.622 22.453V88.541l40.645-24.431z");
}
</style><path class="dn-uczblj"/>`,
		"fallback": "logos:nomad-icon",
	});
}

export default Component;
