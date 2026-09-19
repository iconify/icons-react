import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/k87xdfbfj.css';
import '../../css/v/v8g1xozen.css';
import '../../css/w/w4vhh3s5s.css';
import '../../css/e/etmqncjox.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcWmdtcgB"><g class="s9cl3zbei"><rect class="k87xdfbfj"/><path class="v8g1xozen"/><path class="w4vhh3s5s"/><path class="etmqncjox"/></g></mask></defs><path mask="url(#SVGcWmdtcgB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:transport",
	});
}

export default Component;
