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
		"content": `<style>.b1wig1mxp {
  fill: currentColor;
  d: path("M12 21.577L9.423 19H5.615q-.69 0-1.153-.462T4 17.384V4.616q0-.691.463-1.153T5.616 3h12.769q.69 0 1.153.463T20 4.616v12.769q0 .69-.462 1.153T18.384 19h-3.807zm2.129-10.371Q15 10.335 15 9.077t-.871-2.129T12 6.077t-2.129.871T9 9.077t.871 2.129t2.129.871t2.129-.871M5.423 18h13.154q.211-.133.288-.354t.135-.412q-1.35-1.325-3.138-2.087T12 14.385t-3.863.762T5 17.235q.058.19.134.411t.289.354");
}
</style><path class="b1wig1mxp"/>`,
		"fallback": "material-symbols-light:person-pin",
	});
}

export default Component;
