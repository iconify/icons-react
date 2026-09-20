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
		"content": `<style>.yithmxvzt {
  fill: currentColor;
  d: path("M3 22v-2h2v-3.2q-.875-.3-1.437-1.062T3 14V6h6v8q0 .975-.562 1.738T7 16.8V20h2v2zm2-11h2V8H5zm6 11V9.05l3-1.1V2h5v5.95l3 1.1V22zm5-17h1V4h-1zm-3 7h7v-1.55l-3-1.1V7h-1v2.35l-3 1.1zm0 8h7v-2h-7z");
}
</style><path class="yithmxvzt"/>`,
		"fallback": "material-symbols:liquor-sharp",
	});
}

export default Component;
