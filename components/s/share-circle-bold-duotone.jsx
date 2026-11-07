import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/ulo0tsbay.css';
import '../../css/k/km1fdpbdv.css';
import '../../css/w/w4mn8hb8o.css';
import '../../css/y/ygb5ynbry.css';
import '../../css/v/v4qkmnlcy.css';
import '../../css/a/a-vs3_0vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="ulo0tsbay"/><path class="km1fdpbdv"/><path class="w4mn8hb8o"/></g><path class="ygb5ynbry"/><path class="v4qkmnlcy"/><path class="a-vs3_0vm"/>`,
		"fallback": "solar:share-circle-bold-duotone",
	});
}

export default Component;
