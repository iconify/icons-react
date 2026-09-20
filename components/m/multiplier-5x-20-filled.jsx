import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dp1z-0qhw {
  fill: currentColor;
  d: path("M6.253 6.682A.75.75 0 0 1 7 6h3.25a.75.75 0 0 1 0 1.5H7.685l-.103 1.132l.44-.058a2.85 2.85 0 0 1 3.228 2.825c0 1.581-1.298 2.851-2.865 2.851c-.76 0-1.497-.3-2.037-.841l-.378-.379a.75.75 0 1 1 1.06-1.06l.379.378c.256.256.61.402.976.402c.752 0 1.365-.611 1.365-1.35a1.35 1.35 0 0 0-1.53-1.34l-1.37.183a.75.75 0 0 1-.847-.81zM5 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m8.28-3.28a.75.75 0 1 0-1.06 1.06l.72.72l-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72l.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72l.72-.72a.75.75 0 1 0-1.06-1.06l-.72.72z");
}
</style><path class="dp1z-0qhw"/>`,
		"fallback": "fluent:multiplier-5x-20-filled",
	});
}

export default Component;
