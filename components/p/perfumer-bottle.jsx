import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/ky42xuvke.css';
import '../../css/t/ta-qy393a.css';
import '../../css/p/phixcwbng.css';
import '../../css/q/q8fyyfufk.css';
import '../../css/g/gxg84xsej.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVgtstein"><g class="wwvp95byt"><rect class="ky42xuvke"/><path class="ta-qy393a"/><path class="phixcwbng"/><path class="q8fyyfufk"/><path class="gxg84xsej"/></g></mask></defs><path mask="url(#SVGVgtstein)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:perfumer-bottle",
	});
}

export default Component;
