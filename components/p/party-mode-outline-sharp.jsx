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
		"content": `<style>.wnr0n9bas {
  fill: currentColor;
  d: path("M3 20V6h4.573l1.85-2h5.154l1.85 2H21v14zm1-1h16V7h-4.011l-1.845-2H9.856L8.012 7H4zm8-2.27q1.567 0 2.649-1.081T15.731 13q0-.125-.003-.25t-.047-.25h-1q.05.125.05.25V13q0 1.146-.792 1.939T12 15.73H9.596q.35.419.991.71q.642.29 1.413.29M8.32 13.5h1q-.05-.125-.05-.25V13q0-1.146.792-1.939T12 10.27h2.404q-.427-.438-1.02-.719T12 9.27q-1.567 0-2.649 1.081T8.269 13q0 .125.003.25t.047.25");
}
</style><path class="wnr0n9bas"/>`,
		"fallback": "material-symbols-light:party-mode-outline-sharp",
	});
}

export default Component;
