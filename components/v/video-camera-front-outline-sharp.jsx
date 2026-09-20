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
		"content": `<style>.wibn8nfhz {
  fill: currentColor;
  d: path("M7.173 15.308h6.616v-.166q0-.792-.937-1.313q-.936-.521-2.371-.521t-2.371.52q-.937.522-.937 1.314zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M3.48 19V5h14v6.27l3.038-3.04v7.54l-3.038-3.04V19zm1-1h12V6h-12zm0 0V6z");
}
</style><path class="wibn8nfhz"/>`,
		"fallback": "material-symbols-light:video-camera-front-outline-sharp",
	});
}

export default Component;
