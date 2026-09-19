import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r-nuidkbm.css';
import '../../css/n/ncucyv-0e.css';
import '../../css/h/hcm0kg85a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPbCipfIo"><g class="wwvp95byt"><path class="r-nuidkbm"/><path class="ncucyv-0e"/><path class="hcm0kg85a"/></g></mask></defs><path mask="url(#SVGPbCipfIo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:watch",
	});
}

export default Component;
