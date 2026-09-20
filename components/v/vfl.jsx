import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd36nc3sj.css';
import '../../css/z/ztn2xzsye.css';
import '../../css/p/p9px2f46k.css';
import '../../css/c/csnevobbk.css';
import '../../css/y/ysk65fbuh.css';
import '../../css/x/xmdgbl4ki.css';
import '../../css/m/mwqz07b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGJAFIzcaV" cx="205.45" cy="208.29" r="225.35" gradientTransform="matrix(.04556 0 0 .0456 2.888 2.88)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gd36nc3sj"/><stop offset=".35" class="ztn2xzsye"/><stop offset="1" class="p9px2f46k"/></radialGradient></defs><g class="csnevobbk"><path class="ysk65fbuh"/><path fill="url(#SVGJAFIzcaV)" class="xmdgbl4ki"/><path class="mwqz07b-v"/></g>`,
		"fallback": "material-icon-theme:vfl",
	});
}

export default Component;
