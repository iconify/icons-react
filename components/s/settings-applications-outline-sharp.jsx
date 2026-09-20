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
		"content": `<style>.ygyp--b0z {
  fill: currentColor;
  d: path("M11.577 16.23h.846l.185-1.23q.569-.125.937-.33t.701-.578l1.181.45l.442-.738l-.938-.77q.165-.542.165-1.034t-.165-1.035l.938-.769l-.442-.738l-1.18.45q-.334-.373-.702-.578T12.608 9l-.185-1.23h-.846L11.392 9q-.569.125-.937.33t-.701.578l-1.181-.45l-.442.738l.938.77q-.165.542-.165 1.034t.165 1.035l-.938.769l.442.738l1.18-.45q.334.373.702.578t.937.33zm-.99-2.817Q10 12.825 10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14t-1.412-.587M4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="ygyp--b0z"/>`,
		"fallback": "material-symbols-light:settings-applications-outline-sharp",
	});
}

export default Component;
