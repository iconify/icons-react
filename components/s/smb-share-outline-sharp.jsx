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
		"content": `<style>.gc2ctkgnu {
  fill: currentColor;
  d: path("M11.433 12.692h4.498q.48 0 .813-.332t.333-.811t-.333-.827t-.813-.347h-.55l-.077-.48q-.087-.666-.596-1.127q-.51-.46-1.21-.46q-.552 0-.98.289q-.43.29-.666.769l-.154.307l-.365.02q-.596.05-1.003.462t-.407 1.028t.442 1.062q.44.447 1.068.447M2 19.77V8.077h1v10.692h16.039v1zm3-3V3h7l1.23 1.23H22v12.54zm1-1h15V5.231h-8.19L11.579 4H6zm0 0V4z");
}
</style><path class="gc2ctkgnu"/>`,
		"fallback": "material-symbols-light:smb-share-outline-sharp",
	});
}

export default Component;
