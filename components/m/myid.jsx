import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a13mkh37s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.98 18.143l-3.918-6.786l-10.144 5.857V5.5h-7.836v11.714L9.938 11.357L6.02 18.143L16.164 24L6.02 29.857l3.918 6.786l10.144-5.857V42.5h7.836V30.786l10.144 5.857l3.918-6.786L31.836 24z");
}
</style><path class="a13mkh37s"/>`,
		"fallback": "arcticons:myid",
	});
}

export default Component;
