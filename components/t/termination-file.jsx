import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/s/sz15ivukq.css';
import '../../css/c/chfhwvn0j.css';
import '../../css/a/awrkdxbfk.css';
import '../../css/s/sah188bol.css';
import '../../css/x/xhbs8_0xf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcxBwyaUA"><g class="gopnm44um"><path class="sz15ivukq"/><path class="chfhwvn0j"/><path class="awrkdxbfk"/><path class="sah188bol"/><path class="xhbs8_0xf"/></g></mask></defs><path mask="url(#SVGcxBwyaUA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:termination-file",
	});
}

export default Component;
