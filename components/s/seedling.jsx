import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8pqaz2dh.css';
import '../../css/m/mf9-rqbic.css';
import '../../css/f/fm327c1su.css';
import '../../css/i/igppeccdv.css';
import '../../css/z/z7u1khb0k.css';
import '../../css/d/dcvlsjbph.css';
import '../../css/w/wahywj0gq.css';
import '../../css/i/i2_2pzbkv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8pqaz2dh"/><path class="mf9-rqbic"/><path class="fm327c1su"/><path class="igppeccdv"/><path class="z7u1khb0k"/><path class="dcvlsjbph"/><path class="wahywj0gq"/><path class="i2_2pzbkv"/>`,
		"fallback": "streamline-emojis:seedling",
	});
}

export default Component;
