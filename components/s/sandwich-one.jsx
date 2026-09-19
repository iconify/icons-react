import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/m20g3cc2r.css';
import '../../css/x/xaw6owbro.css';
import '../../css/r/rc-csdbiw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgbZzDbbO"><g class="wwvp95byt"><path class="m20g3cc2r"/><rect transform="rotate(-45 5.071 33.071)" class="xaw6owbro"/><path class="rc-csdbiw"/></g></mask></defs><path mask="url(#SVGgbZzDbbO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sandwich-one",
	});
}

export default Component;
