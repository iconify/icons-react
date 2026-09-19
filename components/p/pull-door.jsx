import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zxj671btt.css';
import '../../css/p/pypazzbsz.css';
import '../../css/m/mscbw7bhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtktsNdgU"><g class="wwvp95byt"><path class="zxj671btt"/><path class="pypazzbsz"/><path class="mscbw7bhq"/></g></mask></defs><path mask="url(#SVGtktsNdgU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:pull-door",
	});
}

export default Component;
