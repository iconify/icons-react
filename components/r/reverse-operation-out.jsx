import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cej2n11nh.css';
import '../../css/g/g03ocyb3a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaRRqpcCp"><g class="wwvp95byt"><path class="cej2n11nh"/><path class="g03ocyb3a"/></g></mask></defs><path mask="url(#SVGaRRqpcCp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:reverse-operation-out",
	});
}

export default Component;
