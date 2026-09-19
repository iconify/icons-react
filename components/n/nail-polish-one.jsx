import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e39v5fbuh.css';
import '../../css/e/e6ks5-b6j.css';
import '../../css/z/z7zy4-buh.css';
import '../../css/t/t_5lzpb3r.css';
import '../../css/j/jz02s9b6o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSOpJmdwa"><g class="wwvp95byt"><rect class="e39v5fbuh"/><path class="e6ks5-b6j"/><path class="z7zy4-buh"/><path class="t_5lzpb3r"/><path class="jz02s9b6o"/></g></mask></defs><path mask="url(#SVGSOpJmdwa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:nail-polish-one",
	});
}

export default Component;
