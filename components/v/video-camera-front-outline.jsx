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
		"content": `<style>.m6v_ovooy {
  fill: currentColor;
  d: path("M7.173 15.308h6.616v-.166q0-.792-.937-1.313q-.936-.521-2.371-.521t-2.371.52q-.937.522-.937 1.314zm3.308-3.616q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433M5.096 19q-.69 0-1.153-.462t-.462-1.153V6.615q0-.69.462-1.152T5.096 5h10.77q.69 0 1.152.463t.463 1.153v4.653l3.038-3.038v7.538l-3.038-3.038v4.654q0 .69-.463 1.153T15.866 19zm0-1h10.77q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442T15.866 6H5.096q-.269 0-.442.173t-.173.443v10.769q0 .269.173.442t.442.173m-.615 0V6z");
}
</style><path class="m6v_ovooy"/>`,
		"fallback": "material-symbols-light:video-camera-front-outline",
	});
}

export default Component;
