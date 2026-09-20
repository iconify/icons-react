import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5gyd0c0a.css';
import '../../css/d/dlbznsbye.css';
import '../../css/r/rdlb1bc-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGyKKOiefb" x1="-376.827" x2="-271.043" y1="315.916" y2="437.861" gradientTransform="translate(1208.005 -831.793)scale(2.8346)" gradientUnits="userSpaceOnUse"><stop offset="0" class="b5gyd0c0a"/><stop offset="1" class="dlbznsbye"/></linearGradient><linearGradient id="SVGs4XuDd5R" x1="-376.557" x2="-271.302" y1="316.228" y2="437.563" gradientTransform="translate(1208.005 -831.793)scale(2.8346)" gradientUnits="userSpaceOnUse"><stop offset="0" class="b5gyd0c0a"/><stop offset="1" class="dlbznsbye"/></linearGradient><path fill="url(#SVGyKKOiefb)" stroke="url(#SVGs4XuDd5R)" class="rdlb1bc-m"/>`,
		"fallback": "selfhst:obtainium",
	});
}

export default Component;
