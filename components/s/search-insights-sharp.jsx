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
		"content": `<style>.bhe5ytc-p {
  fill: currentColor;
  d: path("M10 16.039q2.5 0 4.25-1.756T16 10.019t-1.75-4.264T10 4T5.75 5.756T4 10.019t1.75 4.264T10 16.039m-.5-3.443V6.635h1v5.961zm-3.346 0V8.54h1v4.057zm6.692 0V9.5h1v3.096zM20.312 21l-5.714-5.713q-.929.8-2.105 1.256T10 17q-2.931 0-4.966-2.033Q3 12.933 3 10.003t2.034-4.966T9.997 3t4.967 2.034Q17 7.07 17 10q0 1.317-.457 2.493t-1.256 2.086L21 20.292z");
}
</style><path class="bhe5ytc-p"/>`,
		"fallback": "material-symbols-light:search-insights-sharp",
	});
}

export default Component;
