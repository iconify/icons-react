import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un_yiouya.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/p/pd773mmka.css';
import '../../css/s/stpw7vbyw.css';
import '../../css/g/g1xwfcbjj.css';
import '../../css/c/ct5n7ubxm.css';
import '../../css/u/u9xbpnkox.css';
import '../../css/j/j5e7xzbqs.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="un_yiouya"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="pd773mmka"/><mask id="SVGdm1oAb5g" width="16" height="16" x="8" y="6" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="stpw7vbyw"/></mask><g mask="url(#SVGdm1oAb5g)" class="g1xwfcbjj"><path clip-rule="evenodd" class="ct5n7ubxm"/><path class="u9xbpnkox"/></g><path clip-rule="evenodd" class="j5e7xzbqs"/></g></g>`,
		"fallback": "flagpack:mo",
	});
}

export default Component;
