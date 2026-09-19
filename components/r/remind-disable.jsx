import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkuavfbpw.css';
import '../../css/g/gvjpz8u1b.css';
import '../../css/o/o1m2sbc1u.css';
import '../../css/r/rbs0pvi1u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDLyaheEO"><g class="ft5dv1b6b"><path class="rkuavfbpw"/><path class="gvjpz8u1b"/><path class="o1m2sbc1u"/><path class="rbs0pvi1u"/></g></mask></defs><path mask="url(#SVGDLyaheEO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:remind-disable",
	});
}

export default Component;
