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
		"content": `<style>.zbljqjl4u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18.97 18.757c.085.341-.015.702-.263.95l-2 2a.998.998 0 0 1-1.539-.152l-3.445-5.168L10 17.535V20c0 .265-.105.52-.293.707l-1 1a.998.998 0 0 1-1.539-.152l-1.889-2.834l-2.834-1.889a.998.998 0 0 1-.152-1.539l1-1A1 1 0 0 1 4 14h2.465l1.148-1.723l-5.168-3.445a.998.998 0 0 1-.152-1.539l2-2c.248-.248.609-.348.95-.263l7.45 1.863l2.6-2.6c.77-.771 1.784-1.678 2.886-1.899c.99-.197 1.836.207 2.528.899c1.951 1.952.536 3.878-1 5.414l-2.6 2.6Z");
}
</style><path class="zbljqjl4u"/>`,
		"fallback": "coolicons:plane-bulk-sharp",
	});
}

export default Component;
