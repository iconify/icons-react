import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygb5ynbry.css';
import '../../css/v/v4qkmnlcy.css';
import '../../css/a/a-vs3_0vm.css';
import '../../css/z/zcnczmjty.css';
import '../../css/z/zh8221lvv.css';
import '../../css/g/gapgxrbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygb5ynbry"/><path class="v4qkmnlcy"/><path class="a-vs3_0vm"/><path class="zcnczmjty"/><path class="zh8221lvv"/><path class="gapgxrbjo"/>`,
		"fallback": "solar:share-circle-bold",
	});
}

export default Component;
